/*
  # Create Packages System

  ## Overview
  This migration creates the complete database schema for the Laravel packages system.
  It includes tables for packages, categories, features, code examples, statistics, and related packages.

  ## New Tables
  
  ### 1. `package_categories`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Category name in Arabic
  - `description` (text) - Category description
  - `icon` (text) - Icon identifier
  - `color` (text) - Color theme for the category
  - `packages_count` (integer) - Number of packages in category
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `packages`
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier
  - `name` (text) - Package name
  - `name_ar` (text) - Package name in Arabic
  - `description` (text) - Short description
  - `description_ar` (text) - Description in Arabic
  - `category_id` (uuid) - Foreign key to categories
  - `github_url` (text) - GitHub repository URL
  - `composer_package` (text) - Composer package name
  - `image_url` (text) - Package image/icon URL
  - `php_version` (text) - Minimum PHP version
  - `laravel_version` (text) - Compatible Laravel version
  - `downloads` (integer) - Total downloads
  - `github_stars` (integer) - GitHub stars count
  - `views` (integer) - Page views count
  - `tags` (text array) - Array of tags
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. `package_features`
  - `id` (uuid, primary key) - Unique identifier
  - `package_id` (uuid) - Foreign key to packages
  - `title` (text) - Feature title in Arabic
  - `description` (text) - Feature description in Arabic
  - `icon` (text) - Icon identifier
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 4. `package_code_examples`
  - `id` (uuid, primary key) - Unique identifier
  - `package_id` (uuid) - Foreign key to packages
  - `title` (text) - Example title in Arabic
  - `description` (text) - Example description
  - `code` (text) - Code snippet
  - `language` (text) - Programming language
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 5. `related_packages`
  - `id` (uuid, primary key) - Unique identifier
  - `package_id` (uuid) - Foreign key to packages
  - `related_package_id` (uuid) - Foreign key to related package
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - All tables have RLS enabled
  - Public read access for all package data (SELECT)
  - No public write access (INSERT, UPDATE, DELETE restricted)

  ## Indexes
  - Created indexes on foreign keys for better query performance
  - Created index on package slug for fast lookups
*/

-- Create package_categories table
CREATE TABLE IF NOT EXISTS package_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  color text NOT NULL DEFAULT 'blue',
  packages_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  name_ar text NOT NULL,
  description text NOT NULL,
  description_ar text NOT NULL,
  category_id uuid REFERENCES package_categories(id) ON DELETE SET NULL,
  github_url text,
  composer_package text,
  image_url text,
  php_version text DEFAULT '8.1',
  laravel_version text DEFAULT '10.0',
  downloads integer DEFAULT 0,
  github_stars integer DEFAULT 0,
  views integer DEFAULT 0,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create package_features table
CREATE TABLE IF NOT EXISTS package_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  icon text DEFAULT 'check',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create package_code_examples table
CREATE TABLE IF NOT EXISTS package_code_examples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  code text NOT NULL,
  language text DEFAULT 'php',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create related_packages table
CREATE TABLE IF NOT EXISTS related_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  related_package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(package_id, related_package_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_packages_slug ON packages(slug);
CREATE INDEX IF NOT EXISTS idx_packages_category_id ON packages(category_id);
CREATE INDEX IF NOT EXISTS idx_package_features_package_id ON package_features(package_id);
CREATE INDEX IF NOT EXISTS idx_package_code_examples_package_id ON package_code_examples(package_id);
CREATE INDEX IF NOT EXISTS idx_related_packages_package_id ON related_packages(package_id);

-- Enable Row Level Security
ALTER TABLE package_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_code_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE related_packages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access

-- package_categories policies
CREATE POLICY "Anyone can view package categories"
  ON package_categories FOR SELECT
  TO public
  USING (true);

-- packages policies
CREATE POLICY "Anyone can view packages"
  ON packages FOR SELECT
  TO public
  USING (true);

-- package_features policies
CREATE POLICY "Anyone can view package features"
  ON package_features FOR SELECT
  TO public
  USING (true);

-- package_code_examples policies
CREATE POLICY "Anyone can view package code examples"
  ON package_code_examples FOR SELECT
  TO public
  USING (true);

-- related_packages policies
CREATE POLICY "Anyone can view related packages"
  ON related_packages FOR SELECT
  TO public
  USING (true);
<?php

/**
 * Plugin Name: Semantic Blocks
 * Plugin URI: https://wesleychang.me
 * Description: Plugin for Advanced, Semantic, and SEO optimized Gutenberg Blocks
 * Version: 0.0.1
 * Author: Wesley Chang
 * Author URI: https://wesleychang.me
 * License: GPLv2 or later
 * Text Domain: semantic-blocks
 * Tags: gutenberg, blocks, responsive-layout, semantic, seo, customizable, grid-layout
 */

defined("ABSPATH") or die("Hey, you don't belong here!");

require_once plugin_dir_path(__FILE__) . '/inc/class-semantic-blocks.php';

if (!\function_exists('semantic_blocks_init')) {
  function semantic_blocks_init()
  {
    return Semantic_Blocks::getInstance();
  }
}

semantic_blocks_init();

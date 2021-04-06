<?php

/**
 * Plugin Name: Semantic Blocks
 * Plugin URI: https://www.wesleychang.dev
 * Description: WordPress plugin for advanced Gutenberg blocks, developed with accessibility and semantics in mind.
 * Version: 2.0.0
 * Author: Wesley Chang
 * Author URI: https://www.wesleychang.dev
 * License: GPLv2 or later
 * Text Domain: semantic-blocks
 * Tags: gutenberg, blocks, responsive-layout, semantic, seo, customizable, grid-layout, tailwindcss, tailwind
 */

defined("ABSPATH") or die("Hey, you don't belong here!");

$blocks = ["page-section"];

foreach ($blocks as $block) {
  require_once plugin_dir_path(__FILE__) . "blocks/{$block}/{$block}.php";
}

if (!\function_exists("semantic_blocks_init")) {
  function semantic_blocks_init()
  {
    if (!current_theme_supports("align-wide")) {
      add_theme_support("align-wide");
    }

    add_filter("block_categories", function ($categories) {
      return array_merge($categories, [
        [
          "slug" => "semantic-blocks",
          "title" => __("Semantic Blocks"),
        ],
      ]);
    });
  }
}

semantic_blocks_init();

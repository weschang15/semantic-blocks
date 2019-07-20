<?php

class Semantic_Blocks
{
  const VERSION = '0.0.1';

  static $instance;

  private $plugin;

  private $handle;

  private function __construct()
  {
    $this->plugin = plugin_dir_url(dirname(__FILE__));
    $this->handle = plugin_basename(dirname(__FILE__, 2));
  }

  /**
   * If an instance exists, this returns it.  If not, it creates one and
   * retuns it.
   *
   * @return Semantic_Blocks
   */
  public static function getInstance()
  {
    if (!self::$instance) {
      self::$instance = new self();
      self::$instance->register();
    }
    return self::$instance;
  }

  public function register()
  {
    add_action('block_categories', [$this, 'block_categories'], 10, 2);
    add_action('wp_enqueue_scripts', [$this, 'enqueue_public'], 10, 1);
    add_action('enqueue_block_editor_assets', [$this, 'enqueue_admin'], 10, 1);

    // Adds support for block alignments
    if (!current_theme_supports('align-wide')) {
      add_theme_support('align-wide');
    }
  }

  public function block_categories($categories, $post)
  {
    return \array_merge($categories, [
      [
        'slug' => 'semantic-blocks',
        'title' => __('Semantic Blocks')
      ]
    ]);
  }

  public function enqueue_public()
  {
    wp_enqueue_style(
      $this->handle . '-public',
      $this->plugin . 'build/public.bundle.css',
      [],
      self::VERSION,
      'all'
    );
  }

  public function enqueue_admin()
  {
    wp_enqueue_style(
      $this->handle . '-editor',
      $this->plugin . 'build/editor.bundle.css',
      [],
      null,
      'all'
    );

    wp_enqueue_script(
      $this->handle . '-editor-script',
      $this->plugin . 'build/editor.js',
      ['wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-i18n'],
      self::VERSION
    );
  }
}

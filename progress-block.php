<?php
/**
 * Plugin Name:       Progress Block
 * Description:       Display a progress bar with the WordPress block editor.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      7.0
 * Author:            Paul Eiche
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       peiche/progress-block
 *
 * @package           peiche/progress-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function peiche__progress_block__init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'peiche__progress_block__init' );

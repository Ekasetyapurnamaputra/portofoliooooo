<?php
/**
 * XAMPP Apache entry point for Portfolio Eka
 * Automatically serves the compiled interactive React application
 */

$distIndexPath = __DIR__ . '/dist/index.html';

if (file_exists($distIndexPath)) {
    $content = file_get_contents($distIndexPath);
    // Replace ./assets/ with dist/assets/ so paths work from root http://localhost/portofolio_eka/
    $content = str_replace('src="./assets/', 'src="dist/assets/', $content);
    $content = str_replace('href="./assets/', 'href="dist/assets/', $content);
    echo $content;
} else {
    echo "<h1>Project belum di-build. Jalankan 'npm run build' terlebih dahulu.</h1>";
}

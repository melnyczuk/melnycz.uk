<script lang="ts">
  import { resolve } from '$app/paths';

  import styles from './NotFound.module.scss';
</script>

<main class={styles['page-404']}>
  <a href={resolve('/')}>¯\_(ツ)_/¯</a>
  <p class={styles['page-404']}>404</p>
</main>

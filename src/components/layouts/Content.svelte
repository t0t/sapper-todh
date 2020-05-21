<style lang="scss">
  @import "../../styles/main.scss";
  article {
    @include padding-top(3);
  }
</style>

<article class="grid">
  <slot />
</article>

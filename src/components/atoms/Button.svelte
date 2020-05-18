<script>
  export let text;
</script>

<style lang="scss">
  @import "./styles/main.scss";
  button {
    background-color: $secondary;
    @include padding-top(0);
    @include padding-bottom(0);
    @include media(s1) {
      @include type-setting(0);
    }
    @include media(s2) {
      @include type-setting(0);
    }
    &:hover {
      color: $secondary;
      background-color: $primary;
      cursor: pointer;
    }
  }
</style>

<button>{text}</button>

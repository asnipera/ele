<template>
  <div id="app" ref="fullScreen" :style="computedStyle">
    <router-view />
  </div>
</template>

<script>
  import { updateDocumentTitle } from '@/utils/document-title-util';
  let ResizeObserverIns = null;
  export default {
    name: 'App',
    created() {
      // 恢复主题
      this.$store.dispatch('theme/recoverTheme');
    },
    data() {
      return {
        wScale: 1,
        hScale: 1
      };
    },
    computed: {
      computedStyle() {
        return {
          transform: `scale(${this.wScale})`,
          'transform-origin': '0 0'
        };
      }
    },
    methods: {
      /* 路由切换更新浏览器标题 */
      setDocumentTitle() {
        updateDocumentTitle(
          this.$route,
          (key) => this.$t(key),
          this.$store.state.theme.tabs
        );
      },
      screenResize() {
        console.log(document.documentElement.clientWidth);
        this.wScale = document.documentElement.clientWidth / 2560;
      }
    },
    watch: {
      '$i18n.locale'() {
        this.setDocumentTitle();
      },
      $route() {
        this.setDocumentTitle();
      }
    },
    mounted() {
      this.screenResize();
      ResizeObserverIns = new ResizeObserver(() => {
        this.screenResize();
      });
      ResizeObserverIns.observe(document.documentElement);
    },
    beforeDestroy() {
      ResizeObserverIns && ResizeObserverIns.disconnect();
    }
  };
</script>
<style>
  html {
    width: 100%;
    overflow: hidden !important;
  }
  body {
    width: 2560px;
  }
</style>

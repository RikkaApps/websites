<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <!--<img
        class="background-img"
        v-if="data.backgroundImage"
        :src="$withBase(data.backgroundImage)"
        :alt="data.backgroundAlt || 'background'"
      >-->
      <div class="header">
        <img
          class="avator-img"
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >
        
        <div class="header-text">
          <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>
        </div>
      </div>
    </header>

    <div
      class="apps"
      v-if="data.apps && data.apps.length"
    >
      <div
        div class="app"
        v-for="(app, index) in data.apps"
        :key="index"
      >
        
        <div class="text">
          <div>
          <img class="icon" align="middle" v-if="app.icon" :src="$withBase(app.icon)"></img>
          <span class="title">{{ app.title }}</span>
          </div>
          <span class="details" v-html="app.details"/>
        </div>

        <div class="actions">
	        <div
              class="action"
              v-if="app.secondaryAction"
            >
              <NavLink
                class="action-button secondary"
                :item="app.secondaryAction"
              />
            </div>
	        <div
              class="action"
              v-if="app.primaryAction"
            >
              <NavLink
                class="action-button"
                :item="app.primaryAction"
              />
            </div>
	      </div>
    
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block    
  .hero
    text-align start
    .header
      margin 3rem auto 1.5rem
      display table
    .header-text
      display table-cell
      vertical-align middle
    .avator-img
      display table-cell
      max-width: 100%
      display block
      margin-right: 3rem
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
      background-color #f5f5f5
      border 5px solid #f5f5f5
      height 144px
      width 144px
      border-radius: 77px
      //margin-top: -100px
    .background-img
      max-width: 100%
    h1
      font-size 3rem
	 h1, .description
      margin 0 auto 1rem
    .description
      font-weight 300
      max-width 35rem
      font-size 1.6rem
      line-height 1
      color lighten($textColor, 40%)
      margin 0 auto 0
  .apps
    //border-top 1px solid $borderColor
    padding 0 0
    margin-top 2.5rem
  .app
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
    margin-top -1px
    background-color #fff
    transition background-color .1s ease
    border-top 1px solid $borderColor
    border-bottom 1px solid $borderColor
    padding 1.5rem 3rem
    &:hover
      background-color lighten($textColor, 90%)
    .title
      vertical-align middle
      margin 0 1rem 0
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    .details
      display inline-block      
      line-height 1.3
      margin 1rem 0 0
      color lighten($textColor, 25%)
    .icon
      vertical-align middle
      max-width 2rem
    .text
      flex 1
      align-self center
      margin 0.5rem 1rem 0.5rem
	  .action
	    margin 0.3rem
	  .actions
        margin 0 1rem 0
        align-self center
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content center
      .action-button
        display inline-block
        font-size 1rem
        color #fff
        background-color $accentColor
        padding 0.6rem 1.2rem
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box
        border-bottom 1px solid darken($accentColor, 10%)
        &:hover
          background-color lighten($accentColor, 10%)
	      .secondary
          color $textColor
          background-color transparent
          transition background-color .1s ease
          border 1px solid $textColor
          &:hover
            background-color lighten($textColor, 95%)
        .outbound
          display none
  .footer
    padding 2.5rem
    //border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    padding-left 0
    padding-right 0
    .header
      padding-left 1.5rem
      padding-right 1.5rem
    .app
      align-items flex-start
      justify-content flex-start
      max-width 100%
      padding 1.5rem 10%
      .icon
        max-width 2rem
      .text
        margin 0 1rem 1rem
        flex auto
    .hero
      text-align center
      .header
        margin 3rem auto 1.5rem
        display block
        align-items flex-start
        justify-content center
      .header-text
        display block
        vertical-align middle
        align-items center
        align-content stretch
        justify-content center
      .avator-img
        display block
        margin 3rem auto 1.5rem

@media (max-width: $MQMobileNarrow)
  .home
    .hero
      .avator-img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .actions
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .app
      padding 1.5rem 5%
      .title
        font-size 1.25rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
</style>

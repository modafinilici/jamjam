<template>
  <Layout :sidebar="true">
    <div class="content">
      <h1>{{ this.description }}</h1>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/ce-este-modafinilul" text="Introducere" icon="play-icon" />
        <Shortcut link="/modafinil-romania" text="In Romania" icon="sliders-icon" />
        <Shortcut link="/modafinil-pret" text="Pret" icon="eye-icon" />
      </nav>
     <!-- <GitLink class="git" size="large" /> -->
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GitLink from '~/components/GitLink.vue'
import Shortcut from '~/components/Shortcut.vue'

export default {
  components: {
    GitLink,
    Shortcut
  },
  data() {
    return {
      description: 'Modafinil: Cum, cand si cine il poate folosi in siguranta'
    }
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        { key: 'description', name: 'description', content: 'Scopul acestui blog este de a încuraja informarea asupra efectelor acestei substante.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>

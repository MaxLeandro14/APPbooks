<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat label="MyBooks" :to="{ name: 'inicial'}" ></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout2',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
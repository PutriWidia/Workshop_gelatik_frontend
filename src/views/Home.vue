<template>
  <b-container>
    <div class="home">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 16, first_name: 'Putri', last_name: 'widianingsih' }
      ]
    }
  }
}
</script>

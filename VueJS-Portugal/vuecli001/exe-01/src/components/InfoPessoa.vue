<template>
  <div>
    <p>{{ infonome }} {{ infoapelido }}</p>
  </div>
</template>

<script>
export default {
  props: ["infonome", "infoapelido"],
};
</script>
<template>
<div class="modal modal-active" tabindex="-1" id="modalExample">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
        asdasd
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['showModal', 'modalTitle'],

}
</script>

<style>
.modal-active{
    display: block;
}
</style>
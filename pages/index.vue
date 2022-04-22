<script setup lang="ts">

</script>

<template>
  <div class="main-content">
    <div class="article-item">
      <h4>JS使模板元素进行移动（拖拽模板元素）</h4>
      <div class="article-short text-muted text-truncate">
        前言 拖拽模板元素，需要明白：原理很简单，就是将元素设置为绝对定位，然后监听鼠标按下（mousedown），移动事件(mousemove)，改变元素的top、left值就行。但是具体场景，具体业务需要是不一样的，需要具体来说。下面以我最近的需求为例，来展示如何编写vue3 hooks需求如图，我需要：点集Header部分时，
      </div>
      <div class="category text-muted">
        <span class="badge">
          <i class="iconify" data-icon="mdi:calendar-week" />
          <i class="text">2021-10-17 15:51</i>
        </span>
        <span class="badge">
          <i class="iconify" data-icon="ic:baseline-calendar-view-day" />
          <i class="text">前端相关</i>
        </span>
        <span class="badge float-right">
          <i class="iconify" data-icon="ep:reading" />
          <i class="text">阅读量 1520</i>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content{
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 0.5rem;
  padding-bottom: 1rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  background-color: #fff;
}
.article-item{
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  h4{
    margin: 0;
    padding-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 16px;
  }
  .article-short{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-left: 4px solid #d1d8e0;
    padding-left: 10px;
    margin-left: 2px;
    font-size: 15px;
  }
  .category{
    margin-top: 1rem;
    .badge{
      font-size: 14px;
      font-weight: normal;
      margin-right: 1rem;
      padding: 0.25em 0.4em;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      border-radius: 0.25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      .iconify{
        width: 16px;
        height: 16px;
        margin-right: 0.5rem;
      }
      .text{
        display: inline-block;
        transform: translateY(-3px);
      }
    }
  }
}
</style>

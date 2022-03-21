<template>
  <div>
    <draggable
      v-bind="{
        group: {name:'darg-form',pull:'clone',put:false},
        animation:280,
      }"
      :sort='false'
      v-model="list1"
      ghostClass="ghost"
      chosenClass="chosen"
    >
      <transition-group tag="div" name="list" class="list-main">
        <div v-for="record in list1" :key="record.name" class="box1">
          {{ record.name }}
        </div>
      </transition-group>
    </draggable>
    <draggable
        v-bind="{
        group: 'darg-form',
        animation:180
      }"
        ghostClass="ghost"
      chosenClass="chosen"
      v-model="list2"
    >
      <transition-group tag="div" name="list2" class="list-main">
        <div v-for="record in list2" :key="record.name" class="box2">
          {{ record.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      list1: [
        { name: "leftone" },
        { name: "lefttwo" },
        { name: "leftthree" },
        { name: "leftfour" },
      ],
      list2: [
        { name: "rightone" },
        { name: "righttwo" },
        { name: "rightthree" },
        { name: "rightfour" },
      ],
    };
  },
  components: {
    draggable,
  },
  methods: {
    change() {
      this.test.name = "haha";
    },
  },
};
</script>
<style scoped>
.box1 {
  width: 80%;
  height: 50px;
  margin: 0px auto;
  border: 1px solid #000;
  line-height: 50px;
  text-align: center;
}
.box2 {
  width: 80%;
  height: 50px;
  margin: 0px auto;
  border: 1px solid #000;
  line-height: 50px;
  text-align: center;
}
.list-main {
  margin-top: 20px;
}
.ghost{
  border-top: 2px solid blue;
  background:red
}
.chosen{
  border-top: 2px solid blue;

}

</style>
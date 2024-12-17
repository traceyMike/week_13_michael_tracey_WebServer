<script setup>
import { ref } from 'vue' // import ref and watch

defineProps({ // add props - values will be types, uppercase S in String
  // WouldYouRather's parent component App.vue will provide actual..
  // .. values for the question, answer1, answer2
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([ // defineEmits is a Vue composition API function, allows component to emit custom events
  'answer-selected' // define event called answer-selected
]) // emit becomes a function that can be called to emit the answer-selected event to parent component

// ref(null) - set choice to not an empty string
const choice = ref(null) // choice is reactive variable, initialized as empty string, stores users selected choice

function choiceMade() {
  emit('answer-selected', choice.value)
}


</script>

<template>

<h2>Make your choice!</h2>

{{ question }} <!--can display props in template, can treat props in many of the same ways as Vue data-->
<!--radio buttons - user answer1 and answer2 props for label text-->
<!--add reactive state ref called choice - add v-model="choice"-->
<!--add v-bind values to both radio buttons-->
<!--add v-on:change to both radio buttons | when either radio button is changed, a function called choiceMade is called-->
<div>
<input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1"> <!--delete v-bind:value='asnwer1 and answer2 below'-->
<label for="answer-1"> {{ answer1 }}</label>
<input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2">
<label for="answer-2"> {{ answer2 }}</label>
</div>


</template>

<style scoped>
/* add any styles for this componenet to go here */
/* TODO any styles for this componenet go here */
#wyr { /* container styles */
  background-color: moccasin;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:black;
}
/* questions heading style */
h2 {
  color:burlywood;
  font-size: 2.6em;
  margin-bottom: 20px;
}
/* question text */
#question {
  font-size: 2.3em;
  margin-bottom: 20px;
  color: moccasin;
}
/* radio button style */
#answers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input[type="radio"] {
  margin-right: 8px;
  display: none; /* hide the default radio btn's */
}

/* label styling for the radio buttons */
label {
  color: moccasin;
  background-color: #1a1a1a;
  padding: 3px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.8s ease, color 0.9s ease;
  border: 1px solid gray;
  margin: 6px;
}
/* hover effect for label */
label:hover {
  background-color:blueviolet;
}
/* when radio btn selected, change appearance */
input[type="radio"]:checked + label {
  background-color: mediumaquamarine;
  color: black;
  border-color: red
}



</style>



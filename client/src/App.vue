<script setup>
// onMounted is function that is called when a component is first mounted, created, and added to page
import { ref, onMounted } from 'vue' // import ref from vue

import WouldYouRather from './components/WouldYouRather.vue'

// import wyrService
import wyrService from './services/wyrService'

// Data for the question, and two answers
// reactive state - question and two answers 

const wyrQuestion = ref('Live in a house shaped like a triangle or a house shaped like a circle?')
const wyrAnswer1 = ref('Trinagle house')
const wyrAnswer2 = ref('Circle house')

// make API call and set the value of the wyrQuestion, 
// wyrAnswer1, and wyrAnswer2 data
onMounted( () => {
  wyrService.getRandomWYR().then( wyrData => {
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

// Will store the user's selection, either 'Trinagle house' or 'Circle house'
// stores a message for user selection
const userSelection = ref('')

// updateUserSelection function - set value for userSelection value
function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice} userChoice`
}


</script>

<template>

<h1>Would you rather...</h1>
<!--TODO: show a WouldYouRather component-->
<!--TODO: show user's choice for the would you rather question-->

<!--componenet name generated from the WouldYouRather component, lowercase w/ hyphens-->
<!--v-bind to prop name in component - value is data in this component-->
<!--v-bind answer1, answer2, from parent data to child props-->
<!--you can use multiple v-bind statements-->
<!--writing on more than one line makes it more legible-->
<would-you-rather 
v-bind:question="wyrQuestion"
v-bind:answer1="wyrAnswer1"
v-bind:answer2="wyrAnswer2"
v-on:answer-selected="updateUserSelection"> <!--configure app.vue to expect answer-changed event and call a method when this event happens-->
</would-you-rather> <!--v-on component use the same name emitted by WouldYouRather-->

<!--display user selection in template-->
{{ userSelection }}





  
</template>






<style scoped>

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: azure;
  color: antiquewhite;
  font-family: 'Times New Roman', Times, serif;
  padding: 22px;
}
/* headings */
h1 {
  color:darkgreen;
  font-size: 3em;
  margin-bottom: 14px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
/* container for the WouldYouRather component */
.component-container {
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
  background-color: bisque;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
/* style for displayed user selection text */
.user-selection {
  font-size: 1.2em;
  color: greenyellow;
  margin-top: 15px;
}


</style>

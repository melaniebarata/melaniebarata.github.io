function myFunction() {
               document.getElementById("video").innerHTML = "<div id='player'></div>";

               // 2. This code loads the IFrame Player API code asynchronously.
               var tag = document.createElement('script');

               tag.src = "https://youtu.be/T5xcnjAG8pE";
               var firstScriptTag = document.getElementsByTagName('script')[0];
               firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * Created by Stoyan on 26.6.2017 г..
 */
function attachEvents() {
   $('a').on('click', addClassSelected);

   function addClassSelected() {
       $('a').removeClass('selected')
       $(this).addClass('selected')
   }
}

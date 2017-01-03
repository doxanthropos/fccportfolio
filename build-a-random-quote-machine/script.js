$(document).ready(function() {
  var collection = [{
    text: "No thing great is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer you that there must be time. Let it first blossom, then bear fruit, then ripen.",
    source: "Discourses: Book I, ch. 15."},
                {
    text: "To the rational being only the irrational is unendurable, but the rational is endurable.",
    source: "Discourses: Book I, ch. 2."
                },
                {
    text: "In a word, neither death, nor exile, nor pain, nor anything of this kind is the real cause of our doing or not doing any action, but our inward opinions and principles.",
    source: "Discourses: Book I, ch. 6."
                },
                {
    text: "Reason is not measured by size or height, but by principle",
    source: "Discourses: Book I, ch. 12.",
                },
                {
    text: "Practice yourself, for heaven's sake, in little things; and thence proceed to greater.",
    source: "Discourses: Book I, ch. 18."
                },
                {
    text: "In theory there is nothing to hinder our following what we are taught; but in life there are many things to draw us aside.",
    source: "Discourses: Book I, ch. 26."
                },
                {
    text: "If we are not stupid or insincere when we say that the good or ill of man lies within his own will, and that all beside is nothing to us, why are we still troubled?",
    source: "Discourses: Book I, ch. 25."
                },
                {
    text: "For it is not death or pain that is to be feared, but the fear of pain or death.",
    source: "Discourses: Book II, ch. 1"
                },
                {
    text: "Whatever you would make habitual, practice it; and if you would not make a thing habitual, do not practice it, but accustom yourself to something else.",
    source: "Discourses: Book II, ch. 18."
                },
                {
    text: "If you would be a good reader, read; if a writer, write.",
    source: "Discourses: Book II, ch. 18."
                },
                {
    text: "Men are disturbed, not by things, but by the principles and notions which they form concerning things.",
    source: "Enchiridion: (5)."
                },
                {
    text: "If a man has reported to you, that a certain person speaks ill of you, do not make any defense to what has been told you: but reply, The man did not know the rest of my faults, for he would not have mentioned these only.",
    source: "Enchiridion: (33)."
                }];
  function getQuote(){
    return Math.floor(Math.random() * collection.length); };
  $("#randomizer").click(function(){
    var currentQuote = getQuote();
    $("#quote").html(collection[currentQuote].text + "<br /><em>" + collection[currentQuote].source + "</em>");
  });
  $("#randomizer").click();
});

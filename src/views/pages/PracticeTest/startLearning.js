export const startListening = (speech) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = speech;
    msg.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
};

export default {};

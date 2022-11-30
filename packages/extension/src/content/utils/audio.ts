

const getTeacherAudio = () => {
  return document.getElementById('teacherAudio');
};

const play = () => {
  const audio = getTeacherAudio();
  audio.loop = true;
  audio.play();
}
const pause = () => {
  const audio = getTeacherAudio();
  audio.pause();
}

export {
  play,
  pause
};
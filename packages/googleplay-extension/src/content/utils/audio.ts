

const getTeacherAudio = () => {
  return document.getElementById('teacherAudio');
};

const initAudio = ({
  onended
}) => {
  const audio = getTeacherAudio();
  const cb = () => {
    onended && onended();
  };
  audio?.addEventListener('waiting', cb);
  return () => {
    audio?.removeEventListener('waiting', cb);
  };
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
  pause,
  initAudio
};

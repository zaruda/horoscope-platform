import { makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Background from 'public/images/scanbg.svg';

const useStyles = makeStyles<Theme>(() => ({
  container: {
    position: 'relative',
    height: '100vh',
    '& img': {
      objectFit: 'cover'
    },
    '&  video': {
      objectFit: 'cover'
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      zIndex: 1,
      backgroundImage: `url(${Background.src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }
}));

export default function Scan() {
  const classes = useStyles();
  const router = useRouter();

  function handleTakePhoto() {
    router.push('/analyzing');
  }

  return (
    <div className={classes.container}>
      <Camera isFullscreen isSilentMode onTakePhoto={handleTakePhoto} />
    </div>
  );
}

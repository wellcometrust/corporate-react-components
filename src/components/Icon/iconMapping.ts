import arrow from './components/Arrow';
import arrowMedium from './components/ArrowMedium';
import arrowLong from './components/ArrowLong';
import arrowReverse from './components/ArrowReverse';
import checkmark from './components/Checkmark';
import chevron from './components/Chevron';
import chevronThin from './components/ChevronThin';
import close from './components/Close';
import closeMedium from './components/CloseMedium';
import closeBold from './components/CloseBold';
import closeCircle from './components/CloseCircle';
import cookie from './components/Cookie';
import download from './components/Download';
import email from './components/Email';
import exclamationMark from './components/ExclamationMark';
import externalLink from './components/ExternalLink';
import facebook from './components/Facebook';
import info from './components/Info';
import linkedin from './components/Linkedin';
import message from './components/Message';
import mute from './components/Mute';
import pause from './components/Pause';
import phone from './components/Phone';
import play from './components/Play';
import plus from './components/Plus';
import search from './components/Search';
import shareLink from './components/ShareLink';
import tag from './components/Tag';
import tick from './components/Tick';
import twitter from './components/Twitter';
import update from './components/Update';
import upload from './components/Upload';
import volume from './components/Volume';
import youTube from './components/YouTube';

// Map is used here instead of an object to ensure there is no type mismatch thrown by TypeScript
export default new Map([
  ['arrow', arrow],
  ['arrowMedium', arrowMedium],
  ['arrowLong', arrowLong],
  ['arrowReverse', arrowReverse],
  ['checkmark', checkmark],
  ['chevron', chevron],
  ['chevronThin', chevronThin],
  ['close', close],
  ['closeMedium', closeMedium],
  ['closeBold', closeBold],
  ['closeCircle', closeCircle],
  ['cookie', cookie],
  ['download', download],
  ['email', email],
  ['externalLink', externalLink],
  ['exclamationMark', exclamationMark],
  ['facebook', facebook],
  ['info', info],
  ['linkedin', linkedin],
  ['message', message],
  ['mute', mute],
  ['pause', pause],
  ['phone', phone],
  ['play', play],
  ['plus', plus],
  ['search', search],
  ['shareLink', shareLink],
  ['tag', tag],
  ['tick', tick],
  ['twitter', twitter],
  ['update', update],
  ['upload', upload],
  ['volume', volume],
  ['youTube', youTube]
]);

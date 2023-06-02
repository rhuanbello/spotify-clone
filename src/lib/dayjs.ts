import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
dayjs.locale(ptBr);

export default dayjs;

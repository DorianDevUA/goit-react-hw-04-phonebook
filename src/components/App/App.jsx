import { EventBoard } from '../EventBoard/EventBoard';
import { PageTitle } from '../PageTitle/PageTitle';
import upcomingEvents from '../../upcoming-events.json';
// import css from './App.module.css';
import { Container } from './App.styled';

export function App() {
  return (
    // <div className={css.wrapper}>
    <Container>
      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard items={upcomingEvents} />
    </Container>
    // </div>
  );
}

//! |Комбінації клавіш
// |-----------------------------------
// |Ctrl + P
// |Пошук файлів у проєкті
// |-----------------------------------

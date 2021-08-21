import React from 'react';
import styles from './Politics.module.scss';
import { Layout } from '../../components';
import { background } from '../../utils/global';

const Politics = () => {
  return (
    <Layout bg={background.white}>
      <div className={styles.Politics}>
        <h1 className={styles.Politics__title}>
          Политика обработки персональных данных
        </h1>
        <p className={styles.Politics__p}>
          Настоящая Политика содержит описание принципов и подходов br.ru в
          отношении обработки и обеспечения безопасности персональных данных,
          обязанности и ответственность br.ru при осуществлении такой обработки.
        </p>
        <p className={styles.Politics__p}>
          br.ru полностью обеспечивает соблюдение прав и свобод граждан при
          обработке персональных данных, в том числе обеспечивает защиту прав на
          неприкосновенность частной жизни, личной и семейной тайн. При
          обработке персональных данных в br.ru строго соблюдаются следующие
          принципы:{' '}
        </p>
        <ul>
          <li className={styles.Politics__li}>
            — не допускается обработка персональных данных, несовместимая с
            целями сбора персональных данных;
          </li>
          <li className={styles.Politics__li}>
            — не допускается обработка персональных данных, которые не отвечают
            целям обработки. Содержание и состав обрабатываемых персональных
            данных в br.ru соответствует заявленным целям обработки;
          </li>
          <li className={styles.Politics__li}>
            — при обработке персональных данных обеспечивается точность,
            достаточность, а в необходимых случаях актуальность персональных
            данных;
          </li>
          <li className={styles.Politics__li}>
            — хранение персональных данных осуществляется не дольше, чем этого
            требуют цели обработки персональных данных, а также федеральные
            законы РФ и договоры, сторонами которых, выгодоприобретателем или
            поручителем по которым является субъект персональных данных;
          </li>
          <li className={styles.Politics__li}>
            — обработка персональных данных осуществляется с соблюдением
            принципов и правил, предусмотренных законодательством РФ.
          </li>
        </ul>
        <h2 className={styles.Politics__subtitle}>
          Субъектами персональных данных, обработка которых осуществляется br.ru
          являются:
        </h2>
        <ul>
          <li className={styles.Politics__li}>
            — кандидаты на трудоустройство;
          </li>
          <li className={styles.Politics__li}>— представители контрагентов;</li>
          <li className={styles.Politics__li}>
            — корпоративные клиенты – юридические лица;
          </li>
          <li className={styles.Politics__li}>— клиенты – физические лица;</li>
          <li className={styles.Politics__li}>— работники.</li>
        </ul>
        <h2 className={styles.Politics__subtitle}>
          Цели обработки персональных данных:
        </h2>
        <ul>
          <li className={styles.Politics__li}>
            — Целью обработки персональных данных кандидатов на трудоустройство
            является подбор и найм персонала в br.ru. Целью обработки
            персональных данных работников, является организация учета персонала
            br.ru для обеспечения соблюдения законов и иных нормативных правовых
            актов, содействия в трудоустройстве, обучении, пользования
            различного вида льготами в соответствии с Трудовым кодексом РФ,
            Налоговым кодексом РФ, федеральными законами РФ, в частности:
            Федеральным законом от 1.04.1996 г. № 27-ФЗ «Об индивидуальном
            (персонифицированном) учете в системе обязательного пенсионного
            страхования», Федеральным законом от 27.07.2006 г. № 152-ФЗ «О
            персональных данных».
          </li>
          <li className={styles.Politics__li}>
            — Целями обработки персональных данных представителей контрагентов
            является заключение и исполнение договоров, сторонами которых
            являются контрагент и br.ru, а также исполнение требований
            законодательства РФ. Целями обработки персональных данных клиентов
            является исполнение требований законодательства РФ и исполнение
            договоров, проведения маркетинговых и иных исследований и оказания
            сервисных услуг.
          </li>
        </ul>
        <h2 className={styles.Politics__subtitle}>
          Конфиденциальность персональных данных и возможность передачи
          персональных данных третьим лицам.
        </h2>
        <p className={styles.Politics__p}>
          Доступ к персональным данным ограничивается в соответствии с
          федеральными законами РФ и локальными правовыми актами. br.ru не
          разглашает полученные им в результате своей профессиональной
          деятельности персональные данные. Работники br.ru, получившие доступ к
          персональным данным, принимают обязательства по обеспечению
          конфиденциальности обрабатываемых персональных данных, которые
          определены: трудовым договором; инструкциями в части обеспечения
          безопасности персональных данных. <br /> <br /> Доступ к персональным
          данным, обрабатываемым в br.ru, на основании и во исполнение
          нормативных правовых актов предоставляется органам государственной
          власти по их письменному запросу (требованию). <br /> <br />{' '}
          Безопасность персональных данных brpark.ru предпринимает необходимые
          технические и организационные меры информационной безопасности для
          защиты персональных данных от несанкционированного доступа, изменения,
          раскрытия или уничтожения, путем внутренних проверок процессов сбора,
          хранения и обработки данных и мер безопасности, а также осуществления
          мер по обеспечению физической безопасности данных для предотвращения
          несанкционированного доступа к системам, в которых br.ru хранит
          персональные данные. <br /> <br /> Права и обязанности субъектов
          персональных данных br.ru предпринимает разумные меры для поддержания
          точности и актуальности имеющихся персональных данных, а также
          удаления персональных данных в случаях, если они являются устаревшими,
          недостоверными или излишними, либо если достигнуты цели их обработки.
          Субъекты персональных данных несут ответственность за предоставление
          br.ru достоверных сведений, а также за своевременное обновление
          предоставленных данных в случае каких-либо изменений. В случаях, если
          вы как субъект персональных данных хотите узнать, какими персональными
          данными о вас располагает br.ru, либо дополнить, исправить, обезличить
          или удалить любые неполные, неточные или устаревшие персональные
          данные, либо хотите прекратить обработку br.ru ваших персональных
          данных, либо имеете другие законные требования, вы можете в должном
          порядке и в соответствии с действующим законодательством РФ
          реализовать такое право, обратившись к br.ru по приведенному ниже
          адресу. <br /> <br /> При этом в некоторых случаях (например, если вы
          хотите удалить ваши персональные данные или прекратить их обработку)
          такое обращение также может означать, что br.ru больше не сможет
          предоставлять вам услуги, для оказания которых необходимым и
          обязательным условием является получение и обработка br.ru ваших
          персональных данных. Для выполнения ваших запросов и/или обращений
          br.ru может потребовать установить вашу личность и запросить
          дополнительную информацию, подтверждающую ваше участие в отношениях с
          br.ru, либо сведения, иным образом подтверждающие факт обработки
          персональных данных br.ru. Кроме того, действующее законодательство РФ
          может устанавливать ограничения и другие условия, касающиеся
          упомянутых выше ваших прав. <br /> <br /> Если у вас есть
          дополнительные вопросы или предложения относительно этой Политики, вы
          можете в любое время связаться с br.ru по следующему адресу:
          <a href='mailto:ma@gmail.com'> ma@gmail.com</a>
        </p>
      </div>
    </Layout>
  );
};

export default Politics;

import React from 'react';
import RecommendProducts from './RecommendProducts';
import Link from 'next/link';

const PostDetail = () => (
    <div className="ps-post--detail">
        <div className="ps-post__header">
            <div className="container">
                <h1>
                    Harman Kadon Onyx Studio Mini, <br /> Отзывы и опыт
                </h1>
                <p>
                    Декабрь 17/ 2017 / От drfurion / in
                    <Link href="/blog">
                        <a>Образ жизни</a>
                    </Link>
                    <Link href="/blog">
                        <a>Другие</a>
                    </Link>
                </p>
            </div>
        </div>
        <div className="container">
            <div className="ps-post__content">
                <h4>
                    Если у вас есть эскалация остановки, подумайте
                    короткий взгляд на прогулку. Это особенно проницательно
                    в городских районах с блестящими открытыми транспортными решениями.
                </h4>
                <p>
                    Сегодня большинство людей в среднем занимаются физическими упражнениями от 4 до 6 часов.
                    каждый день и следите за тем, чтобы все, что они вкладывали в
                    рот не наполнен сахарами или консервантами, но они
                    не обращайте внимания на их психическое здоровье, ни на отдых, ни на
                    даже случайные длинные выходные. Все это в надежде на
                    однажды получить это большое продвижение по службе.Этот ответ
                    важно для нашей способности учиться на ошибках, но это
                    также порождает самокритику, поскольку является частью
                    система защиты от угроз. Другими словами, что нас спасает
                    может зайти слишком далеко и обезопасить нас. На самом деле, это может
                    включить самоцензуру. Попытка Ковена - это город с тысячей
                    многолетней истории, которая может многое предложить посетителям
                    турист. Расположен в самом сердце Уорикшира. Одно утро,
                    когда Грегор Замза очнулся от беспокойного сна, он обнаружил
                    сам превратился в своей постели в ужасного паразита. Он
                    лежал на его бронированной спине, и если он поднимал голову
                    почти не было видно его бурого живота, слегка выпуклого и
                    разделен арками на жесткие секции.
                </p>
                <blockquote className="ps-blockquote">
                    <p>
                        “Когда вы думаете «я знаю» и «это так», у вас есть
                        иллюзию знания, иллюзию уверенности, а потом выходит
                        ты безмозглый”
                    </p>
                    <span className="ps-blockquote__author">
                        JELLY CRISTIANA
                    </span>
                </blockquote>
                <p>
                    Это сразу же вызвало в памяти одно из моих самых ярких воспоминаний,
                    с участием моей дочери, когда она была всего лишь малышкой одного года:
                    взяв ее с собой на короткую прогулку, чтобы проверить почту. я
                    жить в небольшом анклаве домов, в которых все почтовые ящики
                    находятся вместе в центре города, менее чем в минуте
                    идти от моей входной двери
                </p>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/blog/detail/2.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/blog/detail/3.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/blog/detail/4.jpg"
                            alt="martfury"
                        />
                    </div>
                </div>
                <h4>По умолчанию осознанность: эффект третьего лица</h4>
                <p>
                    Cray постиронический плед, Helvetica keffiyeh взлохмаченный Carles
                    банджо до того, как они были распроданы блог фотобудка Marfa семиотика
                    Трюффо. Блог следующего уровня Mustache Schlitz Вильямсбург,
                    сумка для пишущей машинки Deep V Бэнкси +1 буквально.
                </p>
                <ul>
                    <li>Об этом красноречиво говорит валлийская писательница Сара Уотерс.</li>
                    <li>
                        В своей классической книге «Креативность в бизнесе», основанной на
                        популярный курс, который они преподавали вместе
                    </li>
                    <li>Писатель и сценарист Стивен Прессфилд</li>
                    <li>
                        Возможная нестандартная идея или решение выглядит как
                        вспышка и исчезает без нашего ведома
                    </li>
                </ul>
                <p>
                    Короткий ответ - да. <strong>По словам Кросса</strong>
                    , когда вы думаете о себе как о другом человеке, это позволяет
                    вам дать себе более объективную и полезную обратную связь.
                </p>
                <h4>Рекомендуемые товары</h4>
                <p>
                    Оба эти предположения, конечно, могут быть полной
                    ЛОЖЬЮ. Самоцензура прочно укоренилась в нашем опыте
                    ошибок в прошлом, а не в настоящем
                </p>
                <RecommendProducts />
            </div>
            <div className="ps-post__footer">
                <p className="ps-post__tags">
                    Тэги:<a href="#">бизнес</a>
                    <a href="#">технология</a>
                </p>
                <div className="ps-post__social">
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="pinterest" href="#">
                        <i className="fa fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default PostDetail;

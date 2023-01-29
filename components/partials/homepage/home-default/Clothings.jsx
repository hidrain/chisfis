import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';
import CollectionProducts from './modules/CollectionProducts';

class Clothings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            currentCollection: 'newArrivals',
        };
    }

    handleChangeProduct(e, currentItem, slug) {
        e.preventDefault();
        const { collections } = this.props;
        const items = getColletionBySlug(collections, slug);
        this.setState({
            currentCollection: currentItem,
            items: items,
        });
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const { currentCollection, items } = this.state;
        const products = getColletionBySlug(collections, collectionSlug);
        const sectionLinks = [
            {
                title: 'Новые поступления',
                name: 'newArrivals',
                slug: 'clothings',
            },
            {
                title: 'Бестселлеры',
                name: 'bestSeller',
                slug: 'fullwidth-clothing-best-sellers',
            },
            {
                title: 'Самое популярное',
                name: 'mostPopular',
                slug: 'fullwidth-clothing-most-popular',
            },
        ];
        let sectionItems;
        if (currentCollection !== 'newArrivals') {
            sectionItems = <CollectionProducts products={items} />;
        } else {
            if (products && products.length > 0) {
                sectionItems = <CollectionProducts products={products} />;
            } else {
                sectionItems = <p>Нет записей</p>;
            }
        }
        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>Одежда и Наряды</h3>
                        <ul className="ps-section__links">
                            {sectionLinks.map(link => (
                                <li
                                    className={
                                        currentCollection === link.name
                                            ? 'active'
                                            : ''
                                    }
                                    key={link.name}>
                                    <a
                                        onClick={e =>
                                            this.handleChangeProduct(
                                                e,
                                                link.name,
                                                link.slug
                                            )
                                        }>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link href="/shop">
                                    <a>Смотреть все</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">{sectionItems}</div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(Clothings);

import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordionHOC from '../decorators/accordionHOC';

class ArticleList extends Component {

    render() {
        const { articles } = this.props;
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={this.props.isOpen(article.id)}
                toggleOpen={this.props.articleAccordion(article.id)}
            />
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    //А вот сюда еще и из декоратора данные приходят
  articles: PropTypes.array
};

ArticleList.defaultProps = {
    articles: []
};

export default accordionHOC(ArticleList);

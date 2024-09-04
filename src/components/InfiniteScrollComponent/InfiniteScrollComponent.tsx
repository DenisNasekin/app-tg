import React, { useEffect, useState } from "react";
import axios from "axios";

import './InfiniteScrollComponent.css';

import { Article } from "../../type/Article";


const InfiniteScrollComponent: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=40');
                setArticles(response.data.slice(0, 5));
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
            setLoading(false);
        };

        fetchArticles(); 
    }, []);

    const loadMoreArticles = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=40');
            setArticles(prevArticles => [...prevArticles, ...response.data.slice(0, 5)]);
        } catch (error) {
            console.error('Error fetching more articles:', error);
        }
        setLoading(false);
    };

    return (    
        <section className="sectionInfiniteScroll">
            <h1 className="sectionInfiniteScroll__title">Articles</h1>
            <div className="sectionInfiniteScroll__content">
                {articles.map(article => (
                    <div className="sectionInfiniteScroll__article" key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                    </div>
                ))}
                {loading && <p>Loading...</p>}
            </div>
            <button className="sectionInfiniteScroll__button" onClick={loadMoreArticles} disabled={loading}>Read more</button>
        </section>
    );
}

export default InfiniteScrollComponent
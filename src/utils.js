import React from 'react';
import _ from 'lodash';

export const getAllMovies = () => {
	var movies = localStorage.getItem('movies-all');
	if (!movies) {
		return [
		{
            key: _.uniqueId(),
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!'
		},
		{   
            key: _.uniqueId(),
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!'
		},
		{
            key: _.uniqueId(),
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!'
		},
		];
	} else {
		return JSON.parse(movies);
	}
};

export const getWatchedMovieList = () => {
	var movies = localStorage.getItem('movies-watched');
	if (!movies) {
		return [];
	} else {
		return JSON.parse(movies);
	}
};

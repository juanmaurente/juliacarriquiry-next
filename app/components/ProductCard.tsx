import React from 'react';
import AddToCart from './AddToCart';

const ProductCard = () => {
	return (
		<div className='p-5 mt-5 bg-sky-400 text-white text-lg hover:bg-sky-500'>
			<AddToCart />
		</div>
	);
};

export default ProductCard;

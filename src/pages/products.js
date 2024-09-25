import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { Spin, List, Card } from 'antd';

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      {status === 'loading' ? (
        <Spin tip="Loading products..." />
      ) : status === 'succeeded' ? (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={products}
          renderItem={(product) => (
            <List.Item>
              <Card title={product.title}>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <p>Error: Failed to load products</p>
      )}
    </div>
  );
};

export default Products;
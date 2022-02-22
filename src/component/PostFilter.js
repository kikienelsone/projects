import React from 'react';
import MyInp from './input/MyInp';
import MySelect from './select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>

            <MyInp
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка по'
                options={[
                    { value: 'title', name: 'по названия' },
                    { value: 'body', name: 'по описанию' },
                ]}

            />
        </div>

    );
};

export default PostFilter;
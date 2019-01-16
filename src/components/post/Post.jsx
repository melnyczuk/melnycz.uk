import React from 'react';

export default function Post({ title, classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <section className={className} >
      {title && <h2 key="title">{title}</h2>}
      {children}
    </section>
  )
}

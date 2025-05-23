export default function BlogCard({ article, layout }) {
    if (!article) return null;
  
    const { title, description, readable_publish_date, tag_list, cover_image, user, url } = article;
    const horizontal = layout === 'horizontal';
  
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow ${horizontal ? 'md:flex' : ''}`}>
        <img src={cover_image} alt={title} className={`${horizontal ? 'md:w-1/2 h-48 object-cover' : 'w-full h-48 object-cover'}`} />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-300 mb-1">
              {user.name} • {readable_publish_date}
            </div>
            <h2 className="text-lg font-semibold dark:text-white">
              <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
          </div>
          <div className="mt-3 text-xs space-x-2">
            {tag_list.map(tag => <span key={tag} className="text-blue-500">#{tag}</span>)}
          </div>
        </div>
      </div>
    );
  }
  
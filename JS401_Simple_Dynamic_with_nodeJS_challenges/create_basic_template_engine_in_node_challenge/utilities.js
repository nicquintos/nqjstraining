function merge(content, values) {
    for (let key in values) {
        content = content.replace("%" + key + "%", values[key]);
      }
    return content;
  }
  
  
  module.exports.merge = merge;
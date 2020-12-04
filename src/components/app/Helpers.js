/** Constant */
export const CONTENT_PREFIX = 'content';
export const MD_PATTERN = /#\sMDINFO/;
export const MD_MATCH = /#\sMDINFO.*}/;
export const MD_PREFIX = 'contentBox';

/** */
export const isEmptyObj = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/** */
export const removeSpalChar = string => {
  return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
}

/** */
export const fetchDataMarkDown = async () => {
  let i = 1;
  let result = [];

  try {
    do {
      // Fetch data
      let text = await fetch(`./data/${MD_PREFIX}${i}.md`).then(res => res.text());

      if (text.substr(0, 9) === '<!DOCTYPE') {
        break;
      }

      // Get define info
      let info = JSON.parse((text.match(MD_MATCH) || ['{}'])[0].replace(MD_PATTERN, ''));
      text = text.replace(MD_MATCH, '');

      result.push({
        id: i,
        info,
        text
      });

      i += 1;
    } while (1);
  } catch (error) {
    console.log('error', error);
  }

  return result;
}

/** */
export const sortContents = contents => {
  return contents.sort((a, b) => {
    return new Date(b.info.time) - new Date(a.info.time);
  });
}
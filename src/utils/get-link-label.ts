/**
 * Create an accessible link text for an author's social links and contact details.
 *
 * Example:
 * <a aria-label={getLinkLabel(name, link)} href='twitter.com/author'>Twitter</a>
 *
 * @param name
 * @param link
 */
export const getLinkLabel = (
  name: string,
  link: { url: string; title: string }
) => {
  const linkMap: Record<string, string> = {
    linkedin: `View ${name}'s LinkedIn profile`,
    twitter: `View ${name}'s Twitter profile`,
    'mailto:': `${name}'s email address: ${link.title}`,
    'tel:': `${name}'s phone number: ${link.title}`,
    'who-we-are/people': `View ${name}'s profile`
  };

  const match = Object.keys(linkMap).find(key => link.url.includes(key));

  return linkMap[match] || `${name}'s ${link.title}`;
};

export default getLinkLabel;

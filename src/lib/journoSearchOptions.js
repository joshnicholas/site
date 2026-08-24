// Common English function words carry no search signal but, indexed across
// hundreds of full article bodies, they rack up huge posting lists - by far
// the biggest contributor to index size. Dropping them at the tokenizer
// shrinks the index with zero loss of search recall.
const STOPWORDS = new Set(
	`a an and are as at be but by for from has have he in is it its of on or
	s t that the their this to was were will with you your we they i us our
	not no do does did can could would should also more most other than then
	there these those his her which who what when where why how`.split(/\s+/)
);

// Shared between scripts/build-journo-index.mjs (build time) and the
// journalism route (client). journoSearchOptions must stay identical on both
// sides, since MiniSearch needs the same options to deserialize an index it
// serialized (processTerm included - it also runs on query terms at search
// time, so build and client must tokenize identically).
export const journoSearchOptions = {
	idField: 'id',
	fields: ['headline', 'standfirst', 'text', 'Site'],
	storeFields: ['headline', 'Site', 'published_date', 'url'],
	processTerm: (term) => {
		term = term.toLowerCase();
		return STOPWORDS.has(term) ? null : term;
	}
};

// Options for each search() call. Fuzzy matching is restricted to longer
// terms - on short/common words (e.g. "whale") a single-edit-distance fuzzy
// match collides with unrelated common words (e.g. "while", "whole") and
// buries genuine matches under noise, since the index also covers full
// article text. Boosting headline/Site keeps title matches ranked above
// incidental mentions buried in an article body.
export const journoQueryOptions = {
	prefix: true,
	fuzzy: (term) => (term.length > 6 ? 0.2 : false),
	boost: { headline: 4, Site: 3, standfirst: 2, text: 1 }
};

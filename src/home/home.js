function home(m) {
  function component() {
    const asciiSkeleton = `  Mithril
    .-.
   (o.o)
    |=|
   __|__
 //.=|=.\\\\
// .=|=. \\\\
\\\\ .=|=. //
 \\\\(_=_)//
  (:| |:)
   || ||
   () ()
   || ||
   || ||
  ==' '==`;

    return {
      view: () => m('.tc', m('pre.dib.tl', asciiSkeleton)),
    };
  }
  return component;
}

module.exports = home;

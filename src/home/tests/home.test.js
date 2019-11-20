const o = require('ospec');
const getNewHome = require('../home');

o.spec('home', () => {
  let mithrilMock;
  let home;

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

  o.beforeEach(() => {
    mithrilMock = o.spy((element) => {
      if (element === '.tc') { return 'div'; }
      if (element === 'pre.dib.tl') { return 'pre'; }
      return null;
    });
    home = getNewHome(mithrilMock);
  });

  o('should return welcome message', () => {
    home().view();
    o(mithrilMock.callCount).equals(2);
    o(mithrilMock.calls[0].args[0]).equals('pre.dib.tl');
    o(mithrilMock.calls[0].args[1]).equals(asciiSkeleton);
    o(mithrilMock.calls[1].args[0]).equals('.tc');
    o(mithrilMock.calls[1].args[1]).equals('pre');
  });
});

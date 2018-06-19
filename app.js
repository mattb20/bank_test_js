const repl = require('repl'),
  context = repl.start('$ ').context;

  context.Bank = require('./bank');

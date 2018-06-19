const repl = require('repl'),
  context = repl.start('$ ').context;

  context.Bank = require('./Bank').Bank;
  context.Transaction = require('./Transaction').Transaction;

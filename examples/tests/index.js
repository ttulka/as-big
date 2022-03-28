import { basics0, basics1, basics2, basics3 } from '../index.js';
import { strictEqual } from 'assert';

strictEqual(basics0(), 0.3);
strictEqual(basics1(), 35.0);
strictEqual(basics2(), '33.33334');
strictEqual(!!basics3(), true);

console.log('tests ok');

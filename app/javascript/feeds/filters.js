import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (date, format = 'LL') => moment(date).format(format))
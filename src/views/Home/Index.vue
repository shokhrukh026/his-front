<template>
  <div class="row">
        <div class="col-12">


            <div class="card">
                <div>
                    <div class="dashboard">
                        <div class="dashboard__left">
                            <div class="dashboard__left_headers">
                                <h1 class="dashboard__left_headers__title">{{$t('dashboard.monitoring')}}</h1>
                                <div class="dashboard__left_headers__select-group">
                                    <select id="regionsId" class="form-control"
                                        onchange="selectRegion(this.options[this.selectedIndex].value)">
                                        <option value="">{{$t('dashboard.region')}}</option>
                                    </select>
                                    <select id="districtId"  class="form-control" onchange="selectDistrict(this.options[this.selectedIndex].value)">
                                        <option value="">{{$t('dashboard.district')}}</option>
                                    </select>
                                    <select id="organizationId"  class="form-control" onchange="selectOrganization(this.options[this.selectedIndex].value)">
                                        <option value="">{{$t('dashboard.typeOrgan')}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="charts-block">
                                <div class="charts-block__chart_state card" style="padding-left: 0">
                                    <h3 class="charts-block__chart_state__title" style="padding-left: 20px">{{$t('dashboard.shtat')}}</h3>
                                    <!-- <div id="state-chart"></div> -->
                                    <apexchart  :options="options" :series="options.series"></apexchart>
                                </div>
                                <div class="charts-block__chart_state card" style="padding-left: 0">
                                    <h3 class="charts-block__chart_state__title" style="padding-left: 20px">{{$t('dashboard.typeOrgan')}}</h3>
                                    <!-- <div id="Institution-type-chart"></div> -->
                                    <apexchart :options="InstitutionTypeOptions" :series="InstitutionTypeOptions.series"></apexchart>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard__right">
                            <div class="dashboard__right__charts">
                                <h3 class="charts-block__chart_state__title" style="padding-left: 15px">{{$t('dashboard.shtat')}}</h3>
                                <!-- <div id="right-state-chart"></div> -->
                                <apexchart  :options="rightStateOptions" :series="rightStateOptions.series"></apexchart>
                                <div class="dashboard__right__state">
                                    <div class="dashboard__right__charts__labels">
                                        <span class="dashboard__right__charts__labels-color-block chart-state-color-one"></span>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="employees">0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.staff')}}</span>
                                        </div>
                                    </div>
                                    <div class="dashboard__right__charts__labels">
                                        <div class="dashboard__right__charts__labels-color-block chart-state-color-two"></div>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="vacancy">0</span>
                                            <span class="dashboard__right__charts__labels__subtext"></span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.vacancy')}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard__right__charts">
                                <h3 class="charts-block__chart_state__title" style="padding-left: 15px">{{$t('dashboard.gender')}}</h3>
                                <!-- <div id="right-state-gender"></div> -->
                                <apexchart :options="rightGenderOptions" :series="rightGenderOptions.series"></apexchart>
                                <div class="dashboard__right__state">
                                    <div class="dashboard__right__charts__labels">
                                        <span class="dashboard__right__charts__labels-color-block chart-age-color-one"></span>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="male">0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.male')}}</span>
                                        </div>
                                    </div>
                                    <div class="dashboard__right__charts__labels">
                                        <div class="dashboard__right__charts__labels-color-block chart-age-color-two"></div>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="female">0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.female')}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard__right__charts">
                                <h3 class="charts-block__chart_state__title" style="padding-left: 10px">{{$t('dashboard.age')}}</h3>
                                <!-- <div id="right-state-age"></div> -->
                                <apexchart :options="rightAgeOptions" :series="rightAgeOptions.series"></apexchart>
                                <div class="dashboard__right__state">
                                    <div class="dashboard__right__charts__labels">
                                        <span class="dashboard__right__charts__labels-color-block chart-gender-color-one"></span>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="up40">0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.untill40')}}</span>
                                        </div>
                                    </div>
                                    <div class="dashboard__right__charts__labels">
                                        <div class="dashboard__right__charts__labels-color-block chart-gender-color-two"></div>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="up60">0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.untill60')}}</span>
                                        </div>
                                    </div>
                                    <div class="dashboard__right__charts__labels">
                                        <div class="dashboard__right__charts__labels-color-block chart-gender-color-three"></div>
                                        <div class="dashboard__right__charts__labels__text">
                                            <span class="dashboard__right__charts__labels__title" id="over60" >0</span>
                                            <span class="dashboard__right__charts__labels__subtext">{{$t('dashboard.over60')}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12" id="by-type-region">

            <div class="card">
                <div class="card-body" id="by-type">

                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#by_hospital">{{$t('by_hospital')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#by_employees">{{$t('by_employees')}}</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade in active show" id="by_hospital">
                            <div class="table-responsive scrollbar" style="height: 500px; overflow-y: scroll;">
                                <table id="organization-by-level-table" class="table table-sm table-striped" style="width:100%;">
                                    <thead class="table__sticky">
                                        <tr>
                                            <th >{{$t('type')}}</th>
                                            <th class="pr-4">{{$t('total')}}</th>
                                            <template v-for="(state, index) in states" :key="index">
                                              <th>{{ state.name }}</th>
                                            </template>
                                            <!-- @foreach ($byType['states'] as $state)
                                                <th>{{ $state->name }}</th>
                                            @endforeach -->
                                        </tr>
                                    </thead>

                                    <tbody style="background: white;">
                                      <template v-for="(type, index) in types" :key="index">
                                          <tr>
                                                <td>{{ type.name }}</td>
                                                <td >{{type.total}}</td>
                                                <template v-for="(state, index) in states" :key="index">
                                                    <td>
                                                        <template>

                                                        </template>
                                                        <!-- @if ($typeCount = $state->bucket->where('type_id', $type->id)->first())
                                                            {{ $typeCount->count }}
                                                        @else
                                                            0
                                                        @endif -->
                                                    </td>
                                                </template>

                                          </tr>
                                      </template>
                                        <!-- @foreach ($byType['types']->sortByDesc('total') as $type)
                                            <tr>
                                                <td>{{ $type->name }}</td>
                                                <td >{{$type->total}}</td>
                                                @foreach ($byType['states'] as $state)

                                                    <td>
                                                        @if ($typeCount = $state->bucket->where('type_id', $type->id)->first())
                                                            {{ $typeCount->count }}
                                                        @else
                                                            0
                                                        @endif
                                                    </td>
                                                @endforeach

                                            </tr>
                                        @endforeach -->
                                    </tbody>

                                    <!-- <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot> -->
                                </table>
                            </div>
                        </div>



                        <div class="tab-pane fade in" id="by_employees">
                            <div class="table-responsive scrollbar" style="height: 500px; overflow-y: scroll;">
                                <table id="organization-by-level-table" class="table table-sm table-striped" style="width:100%">
                                    <thead class="table__sticky">
                                        <tr>
                                            <th>{{$t('type')}}</th>
                                            <th class="pr-4">{{$t('total')}}</th>
                                            <!-- @foreach ($byEmployee['states'] as $state)
                                                <th>{{ $state->name }}</th>
                                            @endforeach -->
                                            <template v-for="(state, index2) in states" :key="index2">
                                              <th>{{ state.name }}</th>
                                            </template>
                                        </tr>
                                    </thead>

                                    <tbody style="background: white;">
                                        <!-- @foreach ($byEmployee['types']->sortByDesc('total') as $type)
                                            <tr>
                                                <td>{{ $type->name }}</td>
                                                <td >{{$type->total}}</td>
                                                @foreach ($byEmployee['states'] as $state)

                                                    <td>
                                                        @if ($typeCount = $state->bucket->where('type_id', $type->id)->first())
                                                            {{ $typeCount->count }}
                                                        @else
                                                            0
                                                        @endif
                                                    </td>
                                                @endforeach

                                            </tr>
                                        @endforeach -->
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>


                    </div>


                    </div>


            </div>


        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const i18n = useI18n();
    const count = ref(0)
    let state_id = ref(null)
    let city_id = ref(null)
    let organization_type_id = ref(null)
    
    
    console.log(i18n)

    let options = ref({
      series: [
          {
              data: [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44]
          },
      ],
      chart: { type: 'bar', height: 350 },
      colors: ['#306ab9', '#aabad0'],
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '56px',
              endingShape: 'rounded',
              borderRadius: 4
          },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: { show: true, colors: ['transparent']},
      xaxis: {
          categories: [i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region'), i18n.t('dashboard.region')],
          labels: { style: { colors: '#2c313a' } }
      },
      grid: { borderColor: '#efefef'},
      fill: { opacity: 1},
      tooltip: {
          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function (seriesName) {
                      return ''
                  }
              }
          }
      },
    });



    let InstitutionTypeOptions = ref({
        series: [{
            data: [44, 44, 44, 44, 44, 44, 44, 44]
        }],
        chart: { type: 'bar', height: 350 },
        colors: ['#6cb2eb', '#CCD2D7'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '56px',
                endingShape: 'rounded',
                borderRadius: 4
            },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        stroke: { show: true, width: 8, colors: ['transparent'] },
        xaxis: {
            categories: [i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ'), i18n.t('dashboard.organ')],
            labels: {
                style: {
                    colors: '#2c313a'
                }
            }
        },
        grid: { borderColor: '#efefef' },
        fill: { opacity: 1 },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                },
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            }
        },
    });



    let rightStateOptions = ref({
        series: [55, 24],
        chart: { type: 'donut', height: 215 },
        colors: ['#306ab9', '#aabad0'],
        plotOptions: { pie: { borderRadius: 4 } },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                },
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });


    let rightGenderOptions = ref({
        series: [55, 24],
        chart: { type: 'donut', height: 215 },
        colors: ['#e15067', '#dcb7bb'],
        plotOptions: { pie: { borderRadius: 4 },},
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                },
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });


    let rightAgeOptions = ref({
        series: [55, 24, 33],
        chart: { type: 'donut', height: 215 },
        colors: ['#FF9333', '#f8af6a', '#fcdcc3'],
        plotOptions: { pie: { borderRadius: 4 },},
        legend: { show: false},
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                },
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });







    return {
      count,
      options,
      InstitutionTypeOptions,
      rightStateOptions,
      rightGenderOptions,
      rightAgeOptions
    }

  },



  async mounted(){

  }


}




// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>






<style>

</style>
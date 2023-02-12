class WorkPlan{
    constructor(nameWork, periodStatus, startDate, endDate, priority, memberList, workStatus) {
        this.nameWork = nameWork;
        this.periodStatus = periodStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.memberList = memberList;
        this.workStatus = workStatus;
    }
}

class WeekPlan {
    constructor(week, startDate, endDate, workList) {
        this.week = week;
        this.startDate = startDate;
        this.endDate = endDate;
        this.workList = workList;
    }
}

let memberList = [["Nguyễn Hữu Học", "https://work.conando.vn/upload/220223/637812349690327647.jpg"]
, ["Trần Thị Diệp Anh", "https://avatars.dicebear.com/api/adventurer-neutral/BB5F999408.svg"]
, ["Hoàng Thị Phương Thảo", "https://avatars.dicebear.com/api/adventurer-neutral/226M40DC04.svg"]
, ["Lê Quang Huy", "https://work.conando.vn/upload/220916/229G2E120D.jpg"]];

let periodStatus = [["Sắp hết hạn", "#4a4a4a"], ["Trễ hạn", "#4a4a4a"]];
let workStatusList = [["Todo" , "#4a4a4a"], ["Doing", "#4a4a4a"], ["Review", "#4a4a4a"], ["Done" , "#4a4a4a"], ["Cancel", "#4a4a4a"]];
let priorityList = [["Thấp", "#8990A5"], ["Trung bình", "#6B8FE0"], ["Quan trọng", "#BCB51F"], ["Khẩn cấp", "#FF5449"]];
let labelList = [["Dự án", "#1f81b2"], ["Vận hành", "#d34a51"], ["Khác", "#3aa51d"], ["Marketing", "#5f8e25"], ["HR", "#c207c5"]];

let filterList = [["Thành viên", memberList], ["Thời hạn", periodStatus], ["Trạng thái", workStatusList], 
["Độ ưu tiên", priorityList], ["Nhãn dán", labelList]];

let workPlanListWeek5 = [
    new WorkPlan("Check in OKRs", periodStatus[0], "03/02", "03/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("abc", periodStatus[0], "03/02", "10/02", "", [memberList[0], memberList[2]], workStatusList[0]),
    new WorkPlan("HRM v2 Hộp thư", periodStatus[0], "30/01", "04/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("Check in OKRs", periodStatus[0], "03/02", "03/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("abc", periodStatus[0], "03/02", "10/02", "", [memberList[0], memberList[2]], workStatusList[0]),
    new WorkPlan("HRM v2 Hộp thư", periodStatus[0], "30/01", "04/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0])
];

let workPlanListWeek2 = [
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodStatus[0], "12/01", "12/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Follow Hi-fi", "", "10/01", "13/01", priorityList[0], [memberList[0], memberList[3]], workStatusList[4]),
    new WorkPlan("Xây dựng plan tuần", "", "13/01", "13/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodStatus[0], "12/01", "12/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Follow Hi-fi", "", "10/01", "13/01", priorityList[0], [memberList[0], memberList[3]], workStatusList[4]),
    new WorkPlan("Xây dựng plan tuần", "", "13/01", "13/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3])
];

let weekPlanList = [
    new WeekPlan(5, "30/01", "05/02", workPlanListWeek5),
    new WeekPlan(2, "09/01", "14/01", workPlanListWeek2)
];

window.addEventListener("DOMContentLoaded", () => {
    let mainContent = document.getElementById("plan-main-content");
    let planFilterContent = document.createElement("ul");
    planFilterContent.setAttribute("class", "filter-content columns is-gapless");
    planFilterContent.setAttribute("id", "plan-filter-content");
    planFilterContent.innerHTML = addViewPlanFilterContent();

    let planDetailContent = document.createElement("div");
    planDetailContent.setAttribute("class", "main-plan-content");
    planDetailContent.setAttribute("id", "main-plan-content");

    mainContent.appendChild(planFilterContent);
})

function addViewPlanFilterContent() {
    return `
    ${addDropdownFilter(filterList)}
    <li class="column is-narrow" style="width: 100px;">
    <div id="e837f45f-9dfc-4c70-aa21-fe5d92b4e803" class="daterangepicker show-calendar opensright" style="position: fixed; top: 83.904px; left: 960.096px; right: auto;"><!--!-->

        <div class="ranges"><!--!-->
        </div><!--!-->

        <!--!--><!--!-->
            <div class="drp-calendar left "><!--!-->
                <div class="calendar-table"><!--!-->
                    <!--!--><table class="table-condensed"><!--!-->
    <thead><!--!-->
        <tr><!--!-->
            <th class="prev available"><!--!--><span></span></th><!--!-->
            <th colspan="5" class="month"><!--!-->
                    <select class="monthselect"><!--!-->
                            <option value="1"><!--!-->
                                Tháng Giêng<!--!-->
                            </option><!--!-->
                            <option selected="" value="2"><!--!-->
                                Tháng Hai<!--!-->
                            </option><!--!-->
                            <option value="3"><!--!-->
                                Tháng Ba<!--!-->
                            </option><!--!-->
                            <option value="4"><!--!-->
                                Tháng Tư<!--!-->
                            </option><!--!-->
                            <option value="5"><!--!-->
                                Tháng Năm<!--!-->
                            </option><!--!-->
                            <option value="6"><!--!-->
                                Tháng Sáu<!--!-->
                            </option><!--!-->
                            <option value="7"><!--!-->
                                Tháng Bảy<!--!-->
                            </option><!--!-->
                            <option value="8"><!--!-->
                                Tháng Tám<!--!-->
                            </option><!--!-->
                            <option value="9"><!--!-->
                                Tháng Chín<!--!-->
                            </option><!--!-->
                            <option value="10"><!--!-->
                                Tháng Mười<!--!-->
                            </option><!--!-->
                            <option value="11"><!--!-->
                                Tháng Mười Một<!--!-->
                            </option><!--!-->
                            <option value="12"><!--!-->
                                Tháng Mười Hai<!--!-->
                            </option><!--!-->
                    </select><!--!-->
                    <select class="yearselect"><!--!-->
                            <option value="1950">1950</option><!--!-->
                            <option value="1951">1951</option><!--!-->
                            <option value="1952">1952</option><!--!-->
                            <option value="1953">1953</option><!--!-->
                            <option value="1954">1954</option><!--!-->
                            <option value="1955">1955</option><!--!-->
                            <option value="1956">1956</option><!--!-->
                            <option value="1957">1957</option><!--!-->
                            <option value="1958">1958</option><!--!-->
                            <option value="1959">1959</option><!--!-->
                            <option value="1960">1960</option><!--!-->
                            <option value="1961">1961</option><!--!-->
                            <option value="1962">1962</option><!--!-->
                            <option value="1963">1963</option><!--!-->
                            <option value="1964">1964</option><!--!-->
                            <option value="1965">1965</option><!--!-->
                            <option value="1966">1966</option><!--!-->
                            <option value="1967">1967</option><!--!-->
                            <option value="1968">1968</option><!--!-->
                            <option value="1969">1969</option><!--!-->
                            <option value="1970">1970</option><!--!-->
                            <option value="1971">1971</option><!--!-->
                            <option value="1972">1972</option><!--!-->
                            <option value="1973">1973</option><!--!-->
                            <option value="1974">1974</option><!--!-->
                            <option value="1975">1975</option><!--!-->
                            <option value="1976">1976</option><!--!-->
                            <option value="1977">1977</option><!--!-->
                            <option value="1978">1978</option><!--!-->
                            <option value="1979">1979</option><!--!-->
                            <option value="1980">1980</option><!--!-->
                            <option value="1981">1981</option><!--!-->
                            <option value="1982">1982</option><!--!-->
                            <option value="1983">1983</option><!--!-->
                            <option value="1984">1984</option><!--!-->
                            <option value="1985">1985</option><!--!-->
                            <option value="1986">1986</option><!--!-->
                            <option value="1987">1987</option><!--!-->
                            <option value="1988">1988</option><!--!-->
                            <option value="1989">1989</option><!--!-->
                            <option value="1990">1990</option><!--!-->
                            <option value="1991">1991</option><!--!-->
                            <option value="1992">1992</option><!--!-->
                            <option value="1993">1993</option><!--!-->
                            <option value="1994">1994</option><!--!-->
                            <option value="1995">1995</option><!--!-->
                            <option value="1996">1996</option><!--!-->
                            <option value="1997">1997</option><!--!-->
                            <option value="1998">1998</option><!--!-->
                            <option value="1999">1999</option><!--!-->
                            <option value="2000">2000</option><!--!-->
                            <option value="2001">2001</option><!--!-->
                            <option value="2002">2002</option><!--!-->
                            <option value="2003">2003</option><!--!-->
                            <option value="2004">2004</option><!--!-->
                            <option value="2005">2005</option><!--!-->
                            <option value="2006">2006</option><!--!-->
                            <option value="2007">2007</option><!--!-->
                            <option value="2008">2008</option><!--!-->
                            <option value="2009">2009</option><!--!-->
                            <option value="2010">2010</option><!--!-->
                            <option value="2011">2011</option><!--!-->
                            <option value="2012">2012</option><!--!-->
                            <option value="2013">2013</option><!--!-->
                            <option value="2014">2014</option><!--!-->
                            <option value="2015">2015</option><!--!-->
                            <option value="2016">2016</option><!--!-->
                            <option value="2017">2017</option><!--!-->
                            <option value="2018">2018</option><!--!-->
                            <option value="2019">2019</option><!--!-->
                            <option value="2020">2020</option><!--!-->
                            <option value="2021">2021</option><!--!-->
                            <option value="2022">2022</option><!--!-->
                            <option value="2023" selected="">2023</option><!--!-->
                            <option value="2024">2024</option><!--!-->
                            <option value="2025">2025</option><!--!-->
                            <option value="2026">2026</option><!--!-->
                            <option value="2027">2027</option><!--!-->
                            <option value="2028">2028</option><!--!-->
                            <option value="2029">2029</option><!--!-->
                            <option value="2030">2030</option><!--!-->
                            <option value="2031">2031</option><!--!-->
                            <option value="2032">2032</option><!--!-->
                            <option value="2033">2033</option><!--!-->
                            <option value="2034">2034</option><!--!-->
                            <option value="2035">2035</option><!--!-->
                            <option value="2036">2036</option><!--!-->
                            <option value="2037">2037</option><!--!-->
                            <option value="2038">2038</option><!--!-->
                            <option value="2039">2039</option><!--!-->
                            <option value="2040">2040</option><!--!-->
                            <option value="2041">2041</option><!--!-->
                            <option value="2042">2042</option><!--!-->
                            <option value="2043">2043</option><!--!-->
                            <option value="2044">2044</option><!--!-->
                            <option value="2045">2045</option><!--!-->
                            <option value="2046">2046</option><!--!-->
                            <option value="2047">2047</option><!--!-->
                            <option value="2048">2048</option><!--!-->
                            <option value="2049">2049</option><!--!-->
                            <option value="2050">2050</option><!--!-->
                            <option value="2051">2051</option><!--!-->
                            <option value="2052">2052</option><!--!-->
                            <option value="2053">2053</option><!--!-->
                            <option value="2054">2054</option><!--!-->
                            <option value="2055">2055</option><!--!-->
                            <option value="2056">2056</option><!--!-->
                            <option value="2057">2057</option><!--!-->
                            <option value="2058">2058</option><!--!-->
                            <option value="2059">2059</option><!--!-->
                            <option value="2060">2060</option><!--!-->
                            <option value="2061">2061</option><!--!-->
                            <option value="2062">2062</option><!--!-->
                            <option value="2063">2063</option><!--!-->
                            <option value="2064">2064</option><!--!-->
                            <option value="2065">2065</option><!--!-->
                            <option value="2066">2066</option><!--!-->
                            <option value="2067">2067</option><!--!-->
                            <option value="2068">2068</option><!--!-->
                            <option value="2069">2069</option><!--!-->
                            <option value="2070">2070</option><!--!-->
                            <option value="2071">2071</option><!--!-->
                            <option value="2072">2072</option><!--!-->
                            <option value="2073">2073</option><!--!-->
                    </select><!--!-->
            </th><!--!-->
            <th class="next available"><!--!--><span></span></th><!--!-->

        </tr><!--!-->
        <tr><!--!-->

<!--!-->
                <th>H</th><!--!-->
                <th>B</th><!--!-->
                <th>T</th><!--!-->
                <th>N</th><!--!-->
                <th>S</th><!--!-->
                <th>B</th><!--!-->
                <th>C</th><!--!-->
<!--!-->
        </tr><!--!-->
    </thead><!--!-->
    <tbody><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class="off ends  available"><!--!-->
30                    </td><!--!-->
                    <td class="off ends  in-range available"><!--!-->
31                    </td><!--!-->
                    <td class=" available"><!--!-->
1                    </td><!--!-->
                    <td class=" available"><!--!-->
2                    </td><!--!-->
                    <td class=" available"><!--!-->
3                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
4                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
5                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
6                    </td><!--!-->
                    <td class=" available"><!--!-->
7                    </td><!--!-->
                    <td class=" available"><!--!-->
8                    </td><!--!-->
                    <td class=" available"><!--!-->
9                    </td><!--!-->
                    <td class=" available"><!--!-->
10                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
11                    </td><!--!-->
                    <td class="today weekend  available"><!--!-->
12                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
13                    </td><!--!-->
                    <td class=" available"><!--!-->
14                    </td><!--!-->
                    <td class=" available"><!--!-->
15                    </td><!--!-->
                    <td class=" available"><!--!-->
16                    </td><!--!-->
                    <td class=" available"><!--!-->
17                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
18                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
19                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
20                    </td><!--!-->
                    <td class=" available"><!--!-->
21                    </td><!--!-->
                    <td class=" available"><!--!-->
22                    </td><!--!-->
                    <td class=" available"><!--!-->
23                    </td><!--!-->
                    <td class=" available"><!--!-->
24                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
25                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
26                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
27                    </td><!--!-->
                    <td class=" available"><!--!-->
28                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
1                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
2                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
3                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
4                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
5                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class="off ends  available"><!--!-->
6                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
7                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
8                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
9                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
10                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
11                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
12                    </td><!--!-->
            </tr><!--!-->
    </tbody><!--!-->
</table><!--!-->
                </div><!--!-->
            </div><!--!-->
                <div class="drp-calendar right"><!--!-->
                    <div class="calendar-table"><!--!-->
                        <!--!--><table class="table-condensed"><!--!-->
    <thead><!--!-->
        <tr><!--!-->
            <th class="prev available"><!--!--><span></span></th><!--!-->
            <th colspan="5" class="month"><!--!-->
                    <select class="monthselect"><!--!-->
                            <option value="1"><!--!-->
                                Tháng Giêng<!--!-->
                            </option><!--!-->
                            <option value="2"><!--!-->
                                Tháng Hai<!--!-->
                            </option><!--!-->
                            <option value="3" selected=""><!--!-->
                                Tháng Ba<!--!-->
                            </option><!--!-->
                            <option value="4"><!--!-->
                                Tháng Tư<!--!-->
                            </option><!--!-->
                            <option value="5"><!--!-->
                                Tháng Năm<!--!-->
                            </option><!--!-->
                            <option value="6"><!--!-->
                                Tháng Sáu<!--!-->
                            </option><!--!-->
                            <option value="7"><!--!-->
                                Tháng Bảy<!--!-->
                            </option><!--!-->
                            <option value="8"><!--!-->
                                Tháng Tám<!--!-->
                            </option><!--!-->
                            <option value="9"><!--!-->
                                Tháng Chín<!--!-->
                            </option><!--!-->
                            <option value="10"><!--!-->
                                Tháng Mười<!--!-->
                            </option><!--!-->
                            <option value="11"><!--!-->
                                Tháng Mười Một<!--!-->
                            </option><!--!-->
                            <option value="12"><!--!-->
                                Tháng Mười Hai<!--!-->
                            </option><!--!-->
                    </select><!--!-->
                    <select class="yearselect"><!--!-->
                            <option value="1950">1950</option><!--!-->
                            <option value="1951">1951</option><!--!-->
                            <option value="1952">1952</option><!--!-->
                            <option value="1953">1953</option><!--!-->
                            <option value="1954">1954</option><!--!-->
                            <option value="1955">1955</option><!--!-->
                            <option value="1956">1956</option><!--!-->
                            <option value="1957">1957</option><!--!-->
                            <option value="1958">1958</option><!--!-->
                            <option value="1959">1959</option><!--!-->
                            <option value="1960">1960</option><!--!-->
                            <option value="1961">1961</option><!--!-->
                            <option value="1962">1962</option><!--!-->
                            <option value="1963">1963</option><!--!-->
                            <option value="1964">1964</option><!--!-->
                            <option value="1965">1965</option><!--!-->
                            <option value="1966">1966</option><!--!-->
                            <option value="1967">1967</option><!--!-->
                            <option value="1968">1968</option><!--!-->
                            <option value="1969">1969</option><!--!-->
                            <option value="1970">1970</option><!--!-->
                            <option value="1971">1971</option><!--!-->
                            <option value="1972">1972</option><!--!-->
                            <option value="1973">1973</option><!--!-->
                            <option value="1974">1974</option><!--!-->
                            <option value="1975">1975</option><!--!-->
                            <option value="1976">1976</option><!--!-->
                            <option value="1977">1977</option><!--!-->
                            <option value="1978">1978</option><!--!-->
                            <option value="1979">1979</option><!--!-->
                            <option value="1980">1980</option><!--!-->
                            <option value="1981">1981</option><!--!-->
                            <option value="1982">1982</option><!--!-->
                            <option value="1983">1983</option><!--!-->
                            <option value="1984">1984</option><!--!-->
                            <option value="1985">1985</option><!--!-->
                            <option value="1986">1986</option><!--!-->
                            <option value="1987">1987</option><!--!-->
                            <option value="1988">1988</option><!--!-->
                            <option value="1989">1989</option><!--!-->
                            <option value="1990">1990</option><!--!-->
                            <option value="1991">1991</option><!--!-->
                            <option value="1992">1992</option><!--!-->
                            <option value="1993">1993</option><!--!-->
                            <option value="1994">1994</option><!--!-->
                            <option value="1995">1995</option><!--!-->
                            <option value="1996">1996</option><!--!-->
                            <option value="1997">1997</option><!--!-->
                            <option value="1998">1998</option><!--!-->
                            <option value="1999">1999</option><!--!-->
                            <option value="2000">2000</option><!--!-->
                            <option value="2001">2001</option><!--!-->
                            <option value="2002">2002</option><!--!-->
                            <option value="2003">2003</option><!--!-->
                            <option value="2004">2004</option><!--!-->
                            <option value="2005">2005</option><!--!-->
                            <option value="2006">2006</option><!--!-->
                            <option value="2007">2007</option><!--!-->
                            <option value="2008">2008</option><!--!-->
                            <option value="2009">2009</option><!--!-->
                            <option value="2010">2010</option><!--!-->
                            <option value="2011">2011</option><!--!-->
                            <option value="2012">2012</option><!--!-->
                            <option value="2013">2013</option><!--!-->
                            <option value="2014">2014</option><!--!-->
                            <option value="2015">2015</option><!--!-->
                            <option value="2016">2016</option><!--!-->
                            <option value="2017">2017</option><!--!-->
                            <option value="2018">2018</option><!--!-->
                            <option value="2019">2019</option><!--!-->
                            <option value="2020">2020</option><!--!-->
                            <option value="2021">2021</option><!--!-->
                            <option value="2022">2022</option><!--!-->
                            <option value="2023" selected="">2023</option><!--!-->
                            <option value="2024">2024</option><!--!-->
                            <option value="2025">2025</option><!--!-->
                            <option value="2026">2026</option><!--!-->
                            <option value="2027">2027</option><!--!-->
                            <option value="2028">2028</option><!--!-->
                            <option value="2029">2029</option><!--!-->
                            <option value="2030">2030</option><!--!-->
                            <option value="2031">2031</option><!--!-->
                            <option value="2032">2032</option><!--!-->
                            <option value="2033">2033</option><!--!-->
                            <option value="2034">2034</option><!--!-->
                            <option value="2035">2035</option><!--!-->
                            <option value="2036">2036</option><!--!-->
                            <option value="2037">2037</option><!--!-->
                            <option value="2038">2038</option><!--!-->
                            <option value="2039">2039</option><!--!-->
                            <option value="2040">2040</option><!--!-->
                            <option value="2041">2041</option><!--!-->
                            <option value="2042">2042</option><!--!-->
                            <option value="2043">2043</option><!--!-->
                            <option value="2044">2044</option><!--!-->
                            <option value="2045">2045</option><!--!-->
                            <option value="2046">2046</option><!--!-->
                            <option value="2047">2047</option><!--!-->
                            <option value="2048">2048</option><!--!-->
                            <option value="2049">2049</option><!--!-->
                            <option value="2050">2050</option><!--!-->
                            <option value="2051">2051</option><!--!-->
                            <option value="2052">2052</option><!--!-->
                            <option value="2053">2053</option><!--!-->
                            <option value="2054">2054</option><!--!-->
                            <option value="2055">2055</option><!--!-->
                            <option value="2056">2056</option><!--!-->
                            <option value="2057">2057</option><!--!-->
                            <option value="2058">2058</option><!--!-->
                            <option value="2059">2059</option><!--!-->
                            <option value="2060">2060</option><!--!-->
                            <option value="2061">2061</option><!--!-->
                            <option value="2062">2062</option><!--!-->
                            <option value="2063">2063</option><!--!-->
                            <option value="2064">2064</option><!--!-->
                            <option value="2065">2065</option><!--!-->
                            <option value="2066">2066</option><!--!-->
                            <option value="2067">2067</option><!--!-->
                            <option value="2068">2068</option><!--!-->
                            <option value="2069">2069</option><!--!-->
                            <option value="2070">2070</option><!--!-->
                            <option value="2071">2071</option><!--!-->
                            <option value="2072">2072</option><!--!-->
                            <option value="2073">2073</option><!--!-->
                    </select><!--!-->
            </th><!--!-->
            <th class="next available"><!--!--><span></span></th><!--!-->

        </tr><!--!-->
        <tr><!--!-->

<!--!-->
                <th>H</th><!--!-->
                <th>B</th><!--!-->
                <th>T</th><!--!-->
                <th>N</th><!--!-->
                <th>S</th><!--!-->
                <th>B</th><!--!-->
                <th>C</th><!--!-->
<!--!-->
        </tr><!--!-->
    </thead><!--!-->
    <tbody><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class="off ends  available"><!--!-->
27                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
28                    </td><!--!-->
                    <td class=" available"><!--!-->
1                    </td><!--!-->
                    <td class=" available"><!--!-->
2                    </td><!--!-->
                    <td class=" available"><!--!-->
3                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
4                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
5                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
6                    </td><!--!-->
                    <td class=" available"><!--!-->
7                    </td><!--!-->
                    <td class=" available"><!--!-->
8                    </td><!--!-->
                    <td class=" available"><!--!-->
9                    </td><!--!-->
                    <td class=" available"><!--!-->
10                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
11                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
12                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
13                    </td><!--!-->
                    <td class=" available"><!--!-->
14                    </td><!--!-->
                    <td class=" available"><!--!-->
15                    </td><!--!-->
                    <td class=" available"><!--!-->
16                    </td><!--!-->
                    <td class=" available"><!--!-->
17                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
18                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
19                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
20                    </td><!--!-->
                    <td class=" available"><!--!-->
21                    </td><!--!-->
                    <td class=" available"><!--!-->
22                    </td><!--!-->
                    <td class=" available"><!--!-->
23                    </td><!--!-->
                    <td class=" available"><!--!-->
24                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
25                    </td><!--!-->
                    <td class="weekend  available"><!--!-->
26                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class=" available"><!--!-->
27                    </td><!--!-->
                    <td class=" available"><!--!-->
28                    </td><!--!-->
                    <td class=" available"><!--!-->
29                    </td><!--!-->
                    <td class=" available"><!--!-->
30                    </td><!--!-->
                    <td class=" available"><!--!-->
31                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
1                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
2                    </td><!--!-->
            </tr><!--!-->
            <tr><!--!-->
<!--!-->               
                    <td class="off ends  available"><!--!-->
3                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
4                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
5                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
6                    </td><!--!-->
                    <td class="off ends  available"><!--!-->
7                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
8                    </td><!--!-->
                    <td class="weekend off ends  available"><!--!-->
9                    </td><!--!-->
            </tr><!--!-->
    </tbody><!--!-->
</table><!--!-->
                    </div><!--!-->
                </div><!--!-->
        <!--!-->

        <div class="drp-buttons"><!--!-->
<!--!-->                <span class="drp-selected"></span>
                <button class="cancelBtn button is-small btn-default" type="button">Hủy</button><!--!-->
                <button class="applyBtn button is-small is-link" disabled="" type="button">Xác nhận</button><!--!-->
        </div><!--!-->

    </div>
    </li>
    <li class="column">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input is-rounded is-small" type="text" placeholder="Tiêu đề làm việc">
          <span class="icon is-small is-left">
            <span class="material-icons material-icons-outlined">search</span>
          </span>
        </p>
      </div>
    </li>
    `;
}

function addDropdownFilter(dropdownList) {
    let result = "";
    for(let i = 0; i < dropdownList.length; i++) {
            result += `
        <li class="column is-narrow" style="width: 100px;">
          <div class="dropdown is-hoverable is-size-7">
            <div class="dropdown-trigger">
              <span class="icon-text">
                <span>${dropdownList[i][0]}</span>
                <span class="material-icons material-icons-outlined">arrow_drop_down</span>
               </span>
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <a class="has-text-weight-semibold has-text-black">${i === 0 ? "Tất cả thành viên" : "Tất cả"}</a>
                </div>`;
                if(i === 0) {
                    for(const element of dropdownList[i][1]) {
                        result += `
                    <div class="dropdown-item py-0">
                        <a class="icon-text is-align-items-center">
                          <span class="icon image is-16x16 mr-2">
                            <img class="is-rounded" src="${element[1]}" alt="IMG">                                
                          </span>
                          <span class="is-size-7">${element[0]}</span>
                         </a>
                    </div>`;
                    }  
                } 
                else {
                    for(const element of dropdownList[i][1]) {
                        result += `
                    <div class="dropdown-item py-0">
                        <a class="icon-text is-align-items-center">
                          <span class="is-size-7" style ="color: ${element[1]}";>${element[0]}</span>
                         </a>
                    </div>`;
                    }
            }
                result += `
            </div>
        </li>`;        
            }
    return result;
    }
